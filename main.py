import openai
import ntpath 
import pandas as pd
import 

# def query_gpt4(prompt):
#     openai.api_key = 'your-api-key-here'  # Replace with your actual API key

#     response = openai.Completion.create(
#         model="text-davinci-004",  # Specify the model
#         prompt=prompt,
#         max_tokens=100  # Adjust based on how long you want the response to be
#     )

#     return response.choices[0].text.strip()

#prompt = "Clean this text data so that only names of items are available. Only include the names of items. Autocorrect all item names: x/m/0100nhbf,Sprengers tulip
#
#response = query_gtp4(prompt)
#print(response)

data = pd.read_csv('/Users/siemdebesay/Downloads/labels.csv')
labels = data['garbage'].to_list()
print(labels)