This is the input file for an library-borrowed event.

Data should be supplied as a UTF-8 Tab Seperated File called borrowing.tsv

# library-borrowed

* [USER_ID](#user_id) [1]
* [ITEM_ID](#item_id) [1]
* [ITEM_TYPE](#item_type) [1]
* [ITEM_NAME](#item_name) [1]
* [TIMESTAMP](#timestamp) [1]
* [OCLC_NUMBER](#oclc_number) [0..1]



## USER_ID 
### Description

A unique identifier for that user

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
The time at which the library item was borrowed

### Valid Values
Any

### Format
ISO 8601 date time

## OCLC_NUMBER
### Description

OLCL NUmber


### Valid Values
Any

### Format
String (255)













