/*
-- =====================================================
-- EXTENSÃO UUID
-- =====================================================

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- TABELA USUARIOS
-- =====================================================

CREATE TABLE usuarios (


id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

nome VARCHAR(100) NOT NULL,

email VARCHAR(150) NOT NULL UNIQUE,

senha VARCHAR(255) NOT NULL,

criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP


);

-- =====================================================
-- TABELA PRODUTOS
-- =====================================================

CREATE TABLE produtos (


id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

nome VARCHAR(100) NOT NULL,

descricao TEXT,

preco DECIMAL(10,2) NOT NULL,

estoque INTEGER DEFAULT 0,

criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP


);

-- =====================================================
-- TABELA PEDIDOS
-- =====================================================

CREATE TABLE pedidos (


id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

usuario_id UUID NOT NULL,

valor_total DECIMAL(10,2) DEFAULT 0,

status VARCHAR(30) DEFAULT 'PENDENTE',

criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

CONSTRAINT fk_pedido_usuario
    FOREIGN KEY (usuario_id)
    REFERENCES usuarios(id)
    ON DELETE CASCADE


);

-- =====================================================
-- ITENS DO PEDIDO
-- =====================================================

CREATE TABLE pedido_itens (

id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

pedido_id UUID NOT NULL,

produto_id UUID NOT NULL,

quantidade INTEGER NOT NULL,

preco_unitario DECIMAL(10,2) NOT NULL,

CONSTRAINT fk_item_pedido
    FOREIGN KEY (pedido_id)
    REFERENCES pedidos(id)
    ON DELETE CASCADE,

CONSTRAINT fk_item_produto
    FOREIGN KEY (produto_id)
    REFERENCES produtos(id)
    ON DELETE CASCADE

SELECT *
FROM pedido_itens;


);

-- ================================================================

CREATE TABLE complementos (

    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    nome VARCHAR(100) NOT NULL,

    preco DECIMAL(10,2) DEFAULT 0

);*/