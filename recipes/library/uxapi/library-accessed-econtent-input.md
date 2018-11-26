This is the input file for a library-viewed-econtent event.

Data should be supplied as a UTF-8 Tab Separated File called econtent.tsv.

# library-viewed-econtent

* [USERNAME](#username) [1]
* [TIMESTAMP](#timestamp) [1]
* [ITEM_ID](#item_id) [1]
* [HOMEPAGE](#HOMPAGE) [0..1]
* [HOSTNAME](#HOSTNAME) [0..1]
* [CLIENT_IP](#client_ip) [0..1]



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

### Purpose

tbc

### Format
String (255)

## HOSTNAME
### Description

A host of the object

### Purpose

tbc

### Format
String (255)

## CLIENT_IP 
### Description

Client's address location on internet, the IP address that has made the request to view the content.

### Valid Values
Value is a string representing an Internet Protocol address (IP address) in either IPv4 or IPv6 format.

### Format
String (255)
