import { Model, ModelStatic } from 'sequelize';

const defineOneToManyAssociation = <P extends Model, C extends Model>(
  Parent: ModelStatic<P>,
  Child: ModelStatic<C>,
  aliasParent: string,
  aliasChild: string,
) => {
  Parent.hasMany(Child, {
    as: aliasChild,
    foreignKey: `${Parent.name.toLowerCase()}Id`,
  });
  Child.belongsTo(Parent, {
    as: aliasParent,
    foreignKey: `${Parent.name.toLowerCase()}Id`,
  });
};

export { defineOneToManyAssociation };
