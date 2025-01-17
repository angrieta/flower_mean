const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
]
const month = document.querySelector('#month')
const result = document.querySelector('.result')
const btn = document.querySelector('#btn')
console.log(month,typeof(month.value))
btn.addEventListener('click',()=>{
    if (month.value >= 1 && month.value <= 12) {
        if(month.value >= 12 ){
            result.innerHTML = `${birthday_flower[11].month}월의 탄생화는 ${birthday_flower[11].flower}, 꽃말은 ${birthday_flower[11].content}입니다.`
        }else if(month.value >=11){
            result.innerHTML = `${birthday_flower[10].month}월의 탄생화는 ${birthday_flower[10].flower}, 꽃말은 ${birthday_flower[10].content}입니다.`
        }else if(month.value >=10){
            result.innerHTML = `${birthday_flower[9].month}월의 탄생화는 ${birthday_flower[9].flower}, 꽃말은 ${birthday_flower[9].content}입니다.`       
        }else if(month.value >=9){
            result.innerHTML = `${birthday_flower[8].month}월의 탄생화는 ${birthday_flower[8].flower}, 꽃말은 ${birthday_flower[8].content}입니다.`       
        }else if(month.value >=8){
            result.innerHTML = `${birthday_flower[7].month}월의 탄생화는 ${birthday_flower[7].flower}, 꽃말은 ${birthday_flower[7].content}입니다.`       
        }else if(month.value >=7){
            result.innerHTML = `${birthday_flower[6].month}월의 탄생화는 ${birthday_flower[6].flower}, 꽃말은 ${birthday_flower[6].content}입니다.`       
        }else if(month.value >=6){
            result.innerHTML = `${birthday_flower[5].month}월의 탄생화는 ${birthday_flower[5].flower}, 꽃말은 ${birthday_flower[5].content}입니다.`       
        }else if(month.value >=5){
            result.innerHTML = `${birthday_flower[4].month}월의 탄생화는 ${birthday_flower[4].flower}, 꽃말은 ${birthday_flower[4].content}입니다.`       
        }else if(month.value >=4){
            result.innerHTML = `${birthday_flower[3].month}월의 탄생화는 ${birthday_flower[3].flower}, 꽃말은 ${birthday_flower[3].content}입니다.`       
        }else if(month.value >=3){
            result.innerHTML = `${birthday_flower[2].month}월의 탄생화는 ${birthday_flower[2].flower}, 꽃말은 ${birthday_flower[2].content}입니다.`       
        }else if(month.value >=2){
            result.innerHTML = `${birthday_flower[1].month}월의 탄생화는 ${birthday_flower[1].flower}, 꽃말은 ${birthday_flower[1].content}입니다.`       
        }else if(month.value >=1){
            result.innerHTML = `${birthday_flower[0].month}월의 탄생화는 ${birthday_flower[0].flower}, 꽃말은 ${birthday_flower[0].content}입니다.`       
        }    
    } else {alert('잘못 입력했습니다.')
    }
    console.log(month,typeof(month))
})
