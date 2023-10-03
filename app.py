from youtube_transcript_api import YouTubeTranscriptApi
import nltk
from nltk.tokenize import word_tokenize
from flask import Flask,request
from flask import jsonify
from flask_cors import CORS
import re
nltk.download('punkt')
app = Flask(__name__)
CORS(app)
import json



def extract_video_id(youtube_url):
    pattern = r"v=([a-zA-Z0-9_-]+)"
    matches = re.findall(pattern, youtube_url)
    if matches:
        return matches[0]
    else:
        return None



@app.route('/data')
def getdata():
    try:
        print("hello")
        params = request.args.get("params")
        print(params)
        params_dict = json.loads(params)
        youtubelink = params_dict.get("youtubelink")
        words = params_dict.get("words")

        video_id=extract_video_id(youtube_url=youtubelink)
        print(video_id)
        ans=YouTubeTranscriptApi.get_transcript(video_id)
        word_data=words.split()
        count=0
        timestamplinsk =[]
        for data in ans:
            words = word_tokenize(data['text'])
            # print(words)
            for searchword in word_data:
                if searchword in words :
                    count+=1
                if count ==len(word_data):
                    print("hurray got it!!!",f'{data["start"]}:{data["start"]%60}')
                    timestamplinsk.append([data["start"],f'https://www.youtube.com/watch?v={video_id}&t={data["start"]}s'])
                    break
        return jsonify({"data":timestamplinsk}),200
    except:
        return jsonify({"error": "Invalid JSON in 'params'"}), 400




# Running app
if __name__ == '__main__':
    app.run(debug=True)