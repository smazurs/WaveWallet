export default function handler(req, res) {
  if (req.method === "POST") {
    const { action, recipient, amount } = req.body;

    // Determine the action to perform with the Python script
    const pythonAction = action === "receive" ? "receive" : "send";
    const pythonProcess = spawn("python", [
      "arduino_handshake.py",
      pythonAction,
      recipient,
      amount.toString(),
    ]);

    pythonProcess.stdout.on("data", (data) => {
      const output = data.toString().trim();
      if (output === "True") {
        res
          .status(200)
          .json({ message: `Transaction ${pythonAction} approved` });
      } else {
        res
          .status(400)
          .json({ message: `Transaction ${pythonAction} not approved` });
      }
    });

    pythonProcess.stderr.on("data", (data) => {
      console.error(`stderr: ${data}`);
      res.status(500).json({ message: "An error occurred" });
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
