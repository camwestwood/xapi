This is the specification for an input TSV file for viewing a reading list item.

Data should be supplied as a UTF-8 Tab Seperated File called readinglistitem_viewed.tsv

# reading_list_viewed

* [USERNAME](#username) [1]
* [HOMEPAGE](#homepage) [1]
* [TIMESTAMP](#timestamp) [1]
* [OBJECT_ID](#object_id) [1]
* [OBJECT_NAME](#object_name) [0..1] 
* [PLATFORM](#platform) [0..1] 
* [LIST_ID](#list_id) [0..1] 
* [LIST_NAME](#list_name) [0..1] 
* [ITEM_TYPE](#item_type) [0..1] 


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
Type for resource being viewed.

### Valid Values
Any

### Format
String (255)


## LIST_ID 
### Description
An identifier for a the list in the platform

### Valid Values
Any

### Format
String (255)


## LIST_NAME 
### Description
The name of the list in the platform

### Valid Values
Any

### Format
String (255)


## ITEM_TYPE 
### Description
The type of item being viewed (e.g. book, external link)

### Valid Values
Any

### Format
String (255)
