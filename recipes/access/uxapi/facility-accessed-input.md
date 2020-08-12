This is the input file for a accessed-econtent event.

Data should be supplied as a UTF-8 Tab Separated File called econtent.tsv.

# facility-accessed

* [USERNAME](#username) [1]
* [HOMEPAGE](#username) [1]
* [TIMESTAMP](#timestamp) [1]
* [SITE](#site) [1]
* [DIRECTION](#direction) [0..1]
* [ACCESS_ID](#type) [1]
* [PLATFORM](#platform) [0..1] 


## USERNAME 
### Description

A unique identifier for that user

### Valid Values
Any

### Format
String (255)

## HOMEPAGE 
### Description

The canonical home page for the system the account is on.

### Valid Values
Any

### Format
IRI (255)

## TIMESTAMP
### Description

Timestamp representing time that facility or building was accessed

### Valid Values
Any

### Format
ISO 8601 timestamp

## SITE
### Description

A iri for the site

### Valid Values
iri

### Format
String (1023)

## DIRECTION
### Description

direction of access

### Valid Values
String

### Format
String (255)


## TYPE 
### Description

The activity type

### Valid Values
Value is a string representing an Internet Protocol address (IP address) in either IPv4 or IPv6 format.

### Format
String (255)

## ACCESS ID 
### Description

The activity type

### Valid Values
Identifer for access id

### Format
String (255)

## PLATFORM 
### Description
The system/platform the activity has been captured from

### Valid Values
Any

### Format
String (255)