This is the input file for an library-viewed-econtent event.

Data should be supplied as a UTF-8 Tab Seperated File called econtent.tsv

# library-viewed-econtent

* [USERNAME](#username) [1]
* [CLIENT_IP](#client_ip) [1]
* [SESSION_ID](#session_id) [1]
* [TIMESTAMP](#timestamp) [1]
* [HTTP_REQUEST](#http_request) [1]
* [HTTP_RESPONSE](#http_response) [0..1]
* [BYTES_DOWNLOADED](#bytes_downloaded) [0..1]
* [HTTP_REFERRER](#http_referrer) [0..1]
* [HTTP_BROWSER_INFO](#http_browser_info) [0..1]


## USERNAME 
### Description

A unique identifier for that user


### Valid Values
Any

### Format
String (255)

## CLIENT_IP 
### Description

Client's address location on internet

### Valid Values
Any

### Format
String (255)


## SESSION_ID
### Description

tbc


### Valid Values
Any

### Format
String (255)

## TIMESTAMP
### Description

Timestamp representing time


### Valid Values
Any

### Format
ISO 8601 timestamp


## HTTP_REQUEST
### Description

tbc

### Valid Values
Any

### Format
String (255)

## HTTP_RESPONSE
### Description

tbc

### Valid Values
Any

### Format
String (255)


## BYTES_DOWNLOADED
### Description

tbc


### Valid Values
Any

### Format
String (255)

## HTTP_BROWSER_INFO
### Description

tbc

### Valid Values
Any

### Format
String (255)
