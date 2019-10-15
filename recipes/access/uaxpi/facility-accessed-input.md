This is the input file for a accessed-econtent event.

Data should be supplied as a UTF-8 Tab Separated File called econtent.tsv.

# facility-accessed

* [USERNAME](#username) [1]
* [HOMEPAGE](#username) [1]
* [TIMESTAMP](#timestamp) [1]
* [SITE](#site) [1]
* [TYPE](#type) []



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


## TYPE 
### Description

The activity type

### Valid Values
Value is a string representing an Internet Protocol address (IP address) in either IPv4 or IPv6 format.

### Format
String (255)
