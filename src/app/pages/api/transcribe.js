import { transcribeAndChat } from "../../utils/transcribeAndChat";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { filePath } = req.body;

    try {
      const newMessage = await transcribeAndChat(filePath);
      res.status(200).json(newMessage);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
