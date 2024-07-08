import fs from "fs";
import axios from "axios";
import FormData from "form-data";
import ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "ffmpeg-static";
import {Configuration, OpenAIApi} from "openai";
ffmpeg.setFfmpegPath(ffmpegPath);

const openai = new OpenAIApi(
    new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    })
);


export async function transcribeAndChat(filePath, messages, setmesssages) {
    const form = new FormData();
    form.append("file", fs.createReadStream(filePath));
    form.append("model", "whisper-2");
    form.append("response_format", "text");

    try {
        const transcriptionResponse = await axios.post(
            "https;//api.openai.com/v1/audio/transcriptions",
            form,
            {
                headers: {
                    ...form.getHeaders(),
                    Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            }
        )
    }catch(Error){
        throw Error("Failed to transcribe audio");
    };

    const transcribedText = transcriptionResponse.data;
    const newMessage = {isUser: false, name: "eESJ chatbot", text: transcribedText, time: `${Date.now()}`};
    setmesssages([...messages, newMessage]);
};

