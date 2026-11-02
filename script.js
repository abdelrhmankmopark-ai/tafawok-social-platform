const AI_API_URL = "https://tafawok-ai.abdelrhmankmopark.workers.dev/";

async function askTafaWok(message) {
if (!message || !message.trim()) {
throw new Error("اكتب سؤالك أولاً");
}

const response = await fetch(AI_API_URL, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        message: message.trim()
    })
});

const data = await response.json();

if (!response.ok) {
    throw new Error(data.error || "حدث خطأ أثناء الاتصال");
}

return data.reply;

}
