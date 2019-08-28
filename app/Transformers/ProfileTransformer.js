'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

/**
 * ProfileTransformer class
 *
 * @class ProfileTransformer
 * @constructor
 */
class ProfileTransformer extends BumblebeeTransformer {
  /**
   * This method is used to transform the data.
   */
  transform (model) {
    return {
     // add your transformation object here
     "email"		      : model.email,
      "created_at"	  : model.created_at,
      "updated_at"		: model.updated_at,
      "id"		        : model.id,
      "first_name"    : model.first_name,
      "last_name"     : model.last_name,
     "address"	      : model.address,
     "phone"		      : model.phone,
     "status"	        :	model.status,
     "birthdate"	    : model.birthdate,
     "description"    : model.description
    }
  }
}

module.exports = ProfileTransformer
