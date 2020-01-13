This is the input file for a library-borrowed event.

Data should be supplied as a UTF-8 Tab Separated File called borrowing.tsv

# library-borrowed

* [USERNAME](#USERNAME) [1]
* [HOMEPAGE](#HOMEPAGE) [1]
* [ITEM_ID](#item_id) [1]
* [ITEM_NAME](#item_name) [0..1]
* [TIMESTAMP](#timestamp) [1]



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

## ITEM_ID 
### Description

A unique identifier for the item (the borrowing site)

### Valid Values
Any

### Format
String (255)


## ITEM_NAME
### Description

A name for the item (the borrowing site)

### Format
String (255)



## TIMESTAMP 
### Description
The time at which the library item was borrowed

### Valid Values
Any

### Format
ISO 8601 date time













