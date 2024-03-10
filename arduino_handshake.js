import { spawn } from 'child_process';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { recipient, amount } = req.body;

    const pythonProcess = spawn('python', ['arduino_handshake.py', 'send', recipient, amount]);

    pythonProcess.stdout.on('data', (data) => {
      const output = data.toString().trim();
      if (output === 'True') {
        res.status(200).json({ message: 'Transaction approved' });
      } else {
        res.status(400).json({ message: 'Transaction not approved' });
      }
    });

    pythonProcess.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
      res.status(500).json({ message: 'An error occurred' });
    });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}