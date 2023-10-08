# Imports
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
import base64
from email.mime.text import MIMEText


# Authenticate
SCOPES = ['https://www.googleapis.com/auth/gmail.readonly', 
          'https://www.googleapis.com/auth/gmail.modify']

token ={
    "access_token": "ya29.a0AfB_byDJXUBEbizkGZeb1jogsi1lHBf7_XT3SWYW_8Wd4NlkXXb1-CD0_arHoDX1DQnCJn2zlVIvLe9mkYKi39lnSMkKJk6sedFvXa181rFotyN3b-GkgDJMr6KxCc1kJDYTvQg0Azl_9qrviTNGzh9xoxcm7mzCZfaJaCgYKAdQSARMSFQGOcNnCsqsW5_aldq_p-f42X6ozLQ0171",
    "expires_in": 3599,
    "refresh_token": "1//0dUtRuR8QRz5rCgYIARAAGA0SNwF-L9IrE-c2B_T7wp-eGhcC-v2qZ2NmHhWJbRDiJ8Z0BBCV8_EsUX7vMZwfrQCKdgGUAyniqhg",
    "scope": "https://www.googleapis.com/auth/gmail.modify https://www.googleapis.com/auth/gmail.readonly",
    "token_type": "Bearer",
    "client_id":"840092620237-1uh9le90vv1d4kttfeila9sjecng3jcj.apps.googleusercontent.com",
    "client_secret":"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"
}

# Authenticate with a variable
creds = Credentials.from_authorized_user_info(token, SCOPES)

# If you choose to authenticate with a file, use this line instead
# creds = Credentials.from_authorized_user_file('token.json', SCOPES)

service = build('gmail', 'v1', credentials=creds)

amazon = service.users().messages().list(userId='me', q='subject: [GitHub] A third-party OAuth application has been added to your account', maxResults=10).execute()

print(amazon)

message = service.users().messages().get(userId='me', id='18b0c16c82be80ae').execute()
print(message['snippet'])