# Wifi access recipe
Revision: 1.2

## Purpose
This activity records a users device accessing wifi via an access point.

## Definition

### Actor
Common entity identifier:  Actor.A

#### Entity Example:
The actor entity describes the individual accessing wifi

<table>
	<tr>
		<th>Property in Example</th><th>Description</th>
	</tr>
	<tr>
		<td>actor.objectType</td>
		<td>"Agent"</td>
	</tr>
	<tr>
		<td>actor.account</td>
		<td>JSON Object with unique id(account.name) and home page(account.homepage)</td>
	</tr>
</table>

``` Javascript
{
    "actor": {
        "objectType": "Agent",,
        "account": {
            "name": "s1234567",
            "homePage": "https://intranet.uni.ac.uk/"
        }
    },
```

### Verb
Common entity identifier: Verb.A

The entity is used across all recipes in the Jisc profile.

#### Entity Example:
The Verb, accessed, describes the action of associating a device to a wifi access point.

<table>
	<tr><th>Property in Example</th><th>Description</th></tr>
	<tr>
		<td>verb.id</td>
		<td>IRI corresponding to Verb.</td>
	</tr>
	<tr>
		<td>verb.display</td>
		<td>Human readable representation of Verb. Key is a RFC 5646 Language Tag</td>
	</tr>
</table>

``` javascript
"verb": {
        "id": "http://activitystrea.ms/schema/1.0/access",
        "display": {
            "en" : "accessed"
        }
    },
```

### Context
Common entity identifier: Context.A

#### Entity Example:
Contextual information.

### Object
Common entity identifier: Object.A

#### Entity Example:
