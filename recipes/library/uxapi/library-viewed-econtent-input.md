This is the input file for an library-viewed-econtent event.

Data should be supplied as a UTF-8 Tab Seperated File called econtent.tsv

# library-viewed-econtent

* [USERNAME](#username) [1]
* [CLIENT_IP](#client_ip) [0..1]
* [SESSION_ID](#session_id) [1]
* [ITEM_ID](#item_id) [1]
* [ITEM_TYPE](#item_type) [1]
* [ITEM_NAME](#item_name) [1]
* [TIMESTAMP](#timestamp) [1]
* [COMPLETED](#completed) [1]

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


## ITEM_ID 
### Description

A unique identifier for that item

### Valid Values
Any

### Format
String (255)


## ITEM_TYPE
### Description

The type of item being viewed

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


## SESSION_ID
### Description

tbc


### Valid Values
Any

### Format
String (255)


## ITEM_ID 
### Description

A unique identifier for that item

### Valid Values
Any

### Format
String (255)


## ITEM_SUBTYPE
### Description

The type of item being borrowed

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

## TIMESTAMP
### Description

Timestamp representing time


### Valid Values
Any

### Format
ISO 8601 timestamp


## COMPLETED
### Description

Was the request completed

### Valid Values
Any

### Format
String (255)