# left recipe (Physical Presence)
Revision: 0.2

## Purpose
This activity records that a person has left a place. In this example deassociation with a WiFi access point

## Definition

### Actor
Common entity identifier:  ActorA, as defined on the [common structures](../common_structures.md#actora) page.
The actor entity describes the individual has left.


``` Javascript
"actor": {
  "objectType": "Agent",
  "name": "John Smith",
  "account": {
    "name": "jsmith12",
    "homePage": "https://courses.alpha.jisc.ac.uk/moodle"
  }
}
```

### Verb
Common entity identifier: VerbA, as defined on the [common structures](../common_structures.md#verba) page.

The Verb, left, describes the action of the actor leaving the object.


``` javascript
"verb": {
        "id": "http://activitystrea.ms/schema/1.0/leave",
        "display": {
            "en" : "left"
        }
    },
```

### Object
Common entity identifier: Object.*

#### Entity Example:
This object, a device, represents the **access point reporting a dissociation** . An id is required and should use a domain that the creator is authorised to use for this purpose. If a mac address is supplied it is the mac address for the access point.

#### Example:
``` javascript
"object": {
  "objectType": "Activity",
  "id": "http://jisc.ac.uk/acesspoints/83028", //id of the access point
  "definition": {
    "type": "http://activitystrea.ms/schema/1.0/device",
    "name": {
      "en": "WiFi Access point"
    },
    "extensions": {
      "http://xapi.jisc.ac.uk/macAddress": "2A3DDE45B7B9"
	  
    }
  }
}
```

### Context
Common entity identifier: Context.*

#### Context Example:
Only the recipe version is required. Other information in the context extensions can include the mac/ip address of the clients device and the location of the WiFi access point.


``` javascript
"context": {
  "extensions": {
	"http://xapi.jisc.ac.uk/macAddress": "000A959D6816",
    "http://id.tincanapi.com/extensions/ip-address": "10.3.3.48",
    "http://xapi.jisc.ac.uk/recipeVersion" : "wifi_access_recipe0.1",
	"http://id.tincanapi.com/extension/location" : "Library"
  }
}
```

