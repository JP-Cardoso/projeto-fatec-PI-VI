import { DataTypes } from 'sequelize';
import { sequelize } from "../database-config.js";
import { AccountModel } from '../account/Account-Model.js';

export const AnalyticsModel = sequelize.define('AnaliseCredito', {
    id: {
        type: DataTypes.CHAR(36),
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4 // Gera automaticamente um UUID
    },
    idConta: {
        type: DataTypes.CHAR(36),
        allowNull: false,
        references: {
            model: AccountModel, // Referencia o modelo diretamente
            key: 'idConta'
        }
    },
    genero: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false
    },
    carro_proprio: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false
    },
    casa_propria: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false
    },
    filhos: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false
    },
    tipo_de_renda: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false
    },
    grau_de_escolaridade: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false
    },
    estado_civil: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false
    },
    tipo_de_moradia: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false
    },
    celular: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false
    },
    telefone_trabalho: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false
    },
    telefone: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false
    },
    email: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false
    },
    membros_da_familia: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false
    },
    faixa_etaria: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false
    },
    renda_anual: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false
    },
    tempo_emprego: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false
    },
    tempo_registro_dados: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false
    }
}, {
    tableName: 'analise_credito',
    timestamps: false
});

// Definindo a relação 1:N
AccountModel.hasMany(AnalyticsModel, { foreignKey: 'idConta', as: 'analisesCredito' });
AnalyticsModel.belongsTo(AccountModel, { foreignKey: 'idConta', as: 'conta' });

