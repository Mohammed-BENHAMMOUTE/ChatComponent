import {transcribeAndChat} from "../../utils/transcribeAndChat";

export default function handler(req, res) {
    if (req.method === 'POST') {
        mic.stopRecording();
        outputFile.end();
        transcribeAndChat("output.wav")
            .then((response) => {
                res.status(200).json(response);
            })
            .catch((error) => {
                console.log(error);
                res.status(500).json({error: error.message});
            });
    } else {
        res.status(405).json({error: "Method not allowed"});
    }
}