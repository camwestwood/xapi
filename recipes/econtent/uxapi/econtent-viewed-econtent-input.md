This is the input file for a library-viewed-econtent event.

Data should be supplied as a UTF-8 Tab Separated File called econtent.tsv.

# viewed-econtent

* [USERNAME](#username) [1]
* [TIMESTAMP](#timestamp) [1]
* [ITEM_ID](#item_id) [1]
* [HOMEPAGE](#HOMPAGE) [0..1]
* [PLATFORM](#platform) [0..1] 
* [ITEM_NAME](#item_name) [1]
* [ITEM_SUBTYPE](#item_subtype) [1]
* [SESSION_ID](#session_id) [1]
* [CLIENT_IP](#client_ip) [0..1]
* [USER_AGENT](#user_agent) [0..1]


## USERNAME 
### Description

A unique identifier for that user


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

## ITEM_ID 
### Description

A unique identifier for that item

### Valid Values
Any

### Format
String (255)


## ITEM_NAME
### Description

A name identifier for that item


### Format
String (255)


## ITEM_SUBTYPE
### Description

The type of item being viewed

### Valid Values
Any

### Format
String (255)

## SESSION_ID
### Description

The local version of an identifier for the session currently in use by the actor. A value should be provided if this information is available from the source system.


### Valid Values
Any

### Format
String (255)


## CLIENT_IP 
### Description

Client's address location on internet, the IP address that has made the request to view the content.

### Valid Values
Value is a string representing an Internet Protocol address (IP address) in either IPv4 or IPv6 format.

### Format
String (255)

## USER_AGENT 
### Description
String with User-Agent characteristics. Used to identify the application type, operating system, software vendor or software version of the requesting software user agent. 

### Valid Values
Any

### Format
string

## PLATFORM 
### Description
The system/platform the activity has been captured from

### Valid Values
Any

### Format
String (255)
