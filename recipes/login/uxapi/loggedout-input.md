This is the specification for an input TSV file for logging out events.

Data should be supplied as a UTF-8 Tab Seperated File called logout.tsv

# logout

* [USERNAME](#username) [1]
* [HOMEPAGE](#homepage) [1]
* [CLIENT_IP](#client_ip) [1]
* [TIMESTAMP](#timestamp) [1]
* [SESSION_ID](#session_id) [0..1]
* [OBJECT_ID](#object_id) [1]
* [OBJECT_NAME](#object_name) [0..1]
* [TYPE](#type) [0..1]
* [USER_AGENT](#user_agent) [0..1]


## USERNAME 
### Description
A unique identifier for the individual logging out.

### Valid Values
Any

### Format
String (255)


## HOMEPAGE 
### Description
URL of the home page of the application for which the login id applies.

### Valid Values
Any

### Format
String (255)


## CLIENT_IP 
### Description
Client's IP address. An IPv4 address is recommended.

### Valid Values
Any

### Format
String (255)



## TIMESTAMP 
### Description
The time at which the user logged out of the platform

### Valid Values
Any

### Format
ISO 8601 date time


## SESSION_ID 
### Description
The VLE session ID, or a suitably hashed version of it. A value should be provided if this information is available.

### Valid Values
Any

### Format
String (255)

## OBJECT_ID 
### Description
An identifier for the application being logged out of.

### Valid Values
Any

### Format
iri

## OBJECT_NAME 
### Description
Optional name of application being logged out of.

### Valid Values
Any

### Format
String (255)

## TYPE 
### Description
Used to identify the type of the application that is being logged into

Different application types should use the relevant type, as defined on the [vocabularies](/vocabulary.md#activity-types) page.

### Valid Values
Any

### Format
iri

## USER_AGENT 
### Description
String with User-Agent characteristics. Used to identify the application type, operating system, software vendor or software version of the requesting software user agent. 

### Valid Values
Any

### Format
string