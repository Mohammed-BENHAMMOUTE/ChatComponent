import Microphone from "node-microphone";
import fs from "fs";
let mic;
let outputFile;
let micStream;

export default async function handler(req,res) {
    if(req.method === 'POST'){
        mic  = new Microphone();
        outputFile = fs.createWriteStream("output.wav");
        micStream = mic.startRecording();
        micStream.on("data", (data) =>{
            outputFile.write(data);
        });
        micStream.on("error", (error) =>{
            console.error('ERROR: ',error);
        });
        res.status(200).json({message : "Recording Started"});
    }else { 
        res.status(405).json({error: "Method not allowed"})
    };
}