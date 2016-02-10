{
    "version": "1.0.0",
	"actor": {
	    "objectType": "Agent",
	    "account": {
	        "name": "12345",
	        "homePage": "https://github.com/jiscdev/analytics-udd/blob/master/predictive-core.md#student_id"
	    }
	},
    "verb": {
        "id": "http://activitystrea.ms/schema/1.0/receive",
	    "display": {
	        "en-GB": "receive",
	        "en-US": "receive"
	    }
    },
    "context": {
      "contextActivities": {
        "grouping": [
            {
                "objectType": "Activity",
                "definition": {
                    "type": "https://github.com/jiscdev/analytics-udd/blob/master/predictive-core.md#mod_instance_id",
                    "description": {
                        "en": "Jisc Module Instance Id"
                    },
                    "name": {
                        "en": "Jisc Module Instance Id"
                    }
                },
                "id": "78910"
            }
        ]
      }
    },
    "timestamp": "2016-02-10T10:20:28+00:00",
    "object": {
        "objectType": "Activity",
	    "id": "https://lap.jisc.ac.uk/earlyAlert",
	    "definition": {
	        "type": "http://activitystrea.ms/schema/1.0/alert",
	        "name": {
	            "en-GB": "An early alert",
	            "en-US": "An early alert"
	        },
	        "description": {
	            "en-GB": "An early alert",
	            "en-US": "An early alert"
	        }
	    }
    },
    "result": {
        "completion": true,
        "extensions": {
          "https://lap.jisc.ac.uk/earlyAlert/score": "HIGH"
        }
      }

}