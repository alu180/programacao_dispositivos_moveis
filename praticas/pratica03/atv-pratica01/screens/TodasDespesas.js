import DespesaSaida from '../components/despesa/DespesaSaida';

function TodasDespesas(){
    const DUMMY_DESPESAS = [
        {
            id: '1',
            descricao: 'Conta de Luz',
            valor: 100.99,
            data: new Date(2025, 2, 11)
        },
        {
            id: '2',
            descricao: 'Conta de Agua',
            valor: 40.99,
            data: new Date(2026, 3, 3)
        }
    ]

    return (
        <DespesaSaida despesas={DUMMY_DESPESAS} periodo={'Total'} />
    )
}

export default TodasDespesas;