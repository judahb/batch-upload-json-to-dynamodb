# Basic Dynamodb Table Loader with JSON File

### Use Case
- Challenging to find an easy uploader app that can upload a json file of standard format into a DynamoDB table without formating the json file
- Basic vanilla AWS and Node Code that can be run locally on a machine to upload data in bulk to dynamodb so long as aws credentials in CLI have been set on localhost
- This is using a single upload command, and can be optimized but its quick and diry and simple to leverage

### Technical Documentation

1. Basic For Loop to Iterate of the Items in JSON File
2. Upload all the Items by doing the jsonfile.length for number of values
3. using Dynamodb putItem with basic params and required formating for Dynamodb upload
4. records.json file located in same directory with sample values to load into Database

