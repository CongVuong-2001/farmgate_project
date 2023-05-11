'use strict';

/**
 * supplier controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::supplier.supplier', ({ strapi }) =>  ({
    async findOne(ctx) {
        const { slug } = ctx.params;
        const entity = await strapi.db.query('api::supplier.supplier').findOne({
            where: {slug}
        });
        const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    
        return this.transformResponse(sanitizedEntity);
      }
}));
