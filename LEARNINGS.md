1. Learned why i shouldn't use browser for an API request client. As inbuild browser methods used to protect from malicious requests using CORS and other security measures. 
2. Advantage of using type over enum, as type is more flexible than enum. For our current project we might need to to import librabries if we use enum but for types no need just 'GET','POST' is enough. Also it won't affect javascript build code with types as they will be removed.
3. Learned about Record<string, string>. Record<string, string> is like a dictionary and as it only adds one data we added string[] to save multiple data in it.
4. HttpHeaders vs HttpHeaders[]:
    - HttpHeaders is like a dictionary where each key has only one value. an array
    - HttpHeaders[] is like a list of dictionaries where each dictionary can have multiple values. multiple objects in an array