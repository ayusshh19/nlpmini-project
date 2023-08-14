from youtube_transcript_api import YouTubeTranscriptApi
import nltk
from nltk.tokenize import word_tokenize
import webbrowser
nltk.download('punkt')

video_id="MwQdQI7valM"
ans=YouTubeTranscriptApi.get_transcript(video_id)
word_data=['simple','present','tense']
for data in ans:
    words = word_tokenize(data['text'])
    if "simple" in words and "present" in words:
        print("hurray got it!!!",f'{data["start"]}:{data["start"]%60}')
        webbrowser.open(f'https://www.youtube.com/watch?v={video_id}&t={data["start"]}s')
        break