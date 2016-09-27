# Wifi association recipe
Revision: 1.2

## Purpose
This activity records a user device associating with a wifi access point.

## Definition

### Actor
Common entity identifier:  Actor.A

#### Entity Example:
The actor entity describes the individual that is making the association

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

### Context
Common entity identifier: Context.A

#### Entity Example:
Contextual information.

### Object
Common entity identifier: Object.A

#### Entity Example:
