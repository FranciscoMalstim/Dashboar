import React from 'react'
import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward} from '@material-ui/icons'

export default function FeaturedInfo() {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <span className="featuredTitle">Revenda</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">R$ 1,466</span>
                <span className="featuredMoneyRate">
                    -11.4 <ArrowDownward className='featureIcon negative'/>
                </span>
            </div>
            <span className="featuredSub">Comparado ao mês Passado</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Vendas</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">R$ 1,855</span>
                <span className="featuredMoneyRate">
                    -11.4 <ArrowDownward className='featureIcon negative'/>
                </span>
            </div>
            <span className="featuredSub">Comparado ao mês Passado</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Custo</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">R$ 1,754</span>
                <span className="featuredMoneyRate">
                    +11.4 <ArrowUpward className='featureIcon'/>
                </span>
            </div>
            <span className="featuredSub">Comparado ao mês Passado</span>
        </div>
    </div>
  )
}
