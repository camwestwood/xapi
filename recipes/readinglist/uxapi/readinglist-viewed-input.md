This is the specification for an input TSV file for viewing a reading list.

Data should be supplied as a UTF-8 Tab Seperated File called reading_viewed.tsv

# reading_list_viewed

* [USERNAME](#username) [1]
* [HOMEPAGE](#homepage) [1]
* [TIMESTAMP](#timestamp) [1] (
* [URL](#object_id) [1]
* [TITLE](#object_name) [0..1] 
* [ACTIVITY_TYPE](#object_type) [0..1] 
* [SESSION_ID](#session_id) [0..1] 
* [PLATFORM](#platform) [0..1] 

## USERNAME 
### Description
A unique identifier for the individual viewing the resource.

### Purpose
Analytics - to identify the user

### Derivation
Jisc

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


## TIMESTAMP 
### Description
The time at which the user viewed the resource.


### Valid Values
Any

### Format
ISO 8601 date time

## OBJECT_ID 
### Description
An identifier for the resource being viewed.

### Valid Values
Any

### Format
iri


## OBJECT_NAME 
### Description
Optional name for resource being viewed.

### Valid Values
Any

### Format
String (255)

## OBJECT_TYPE 
### Description
Optional type for resource being viewed.

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

## SESSION_ID 
### Description
The VLE session ID, or a suitably hashed version of it. A value should be provided if this information is available.

### Valid Values
Any

### Format
String (255)
