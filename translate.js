$(function() {
    var arrLang = {
        'en':{
            'express': "EXPRESS",
            'parce': 'PARCE & ECOMMERCE',
            'logistics': 'LOGIStics',
            'mail': "MAIL",
            "press": "PRESS",
            'about': "ABOUT",

            'contact_center': "Contact center",
            'country_profile': "country profile",

            'we_dev_sp': "We Deliver With Speed",

            'amazing':"amazing",
            'quick':"quick",
            'sup': "24/7 supports",

            'learn': "learn more",
            'dhl_but': "dhl worldwide",

            'frieght': "frieght transport",

            'explore': "explore",

            'best': "One of the best international service provider",

            'aero': "Aerospace Provider",

            'track': "TRACK YOUR SHIPMENT",
            'log': "NEW LOGIN",
            'find_point': "FIND DHL POINT",
            'find_service': "FIND A SERVICE",

            'excelelence': "Excelelence. simply Delivered.",
            'international': "International express deliveries; global freight forwarding by air, sea, road and rail; warehousing solutions from packaging, to repairs, to storage; mail deliveries worldwide; and other customized logistic services – with everything DHL does, we help connect people and improve their lives.",
            
            'forward': "dhl global forwarding",
            'glob_freight': "dhl freight",
            'supply_chain': "dhl supply chain",

            'partnerships': "Partnerships",
            'portrait': "Company Portrait",
            'green': "Green Solutions",
            'innovation': "Innovation",

            'facebook': "facebook",
            'dribbble': "dribbble",
            'behance': 'behance',
            'gmail': "gmail",
            'twitter': "twitter",
        },
        'ru':{
            'express': "Доставка",
            'parce': 'Струкрута',
            'logistics': 'Логистика',
            'mail': "Почта",
            "press": "Спонсоры",
            'about': "О нас",

            'contact_center': "Центр контактов",
            'country_profile': "Выберите страну",

            'we_dev_sp': "Быстрая доставка",

            'amazing':"Великолепно",
            'quick':"Быстро",
            'sup': "Поддержка 24/7",

            'learn': "Узнать больше",
            'dhl_but': "мы везде",

            'frieght': "грузовой транспорт",

            'explore': "Узнать",

            'best': "Один из лучших международных поставщиков услуг",

            'aero': "Аэро-провайдер",

            'track': "ОТСЛЕЖИВАЙТЕ ОТГРУЗКУ",
            'log': "Войти",
            'find_point': "Отследить заказ",
            'find_service': "Отследить сервис",

            'excelelence': "Совершенство. Лучшая доставка.",
            'international': "Международные экспресс-доставки; глобальное экспедирование грузов воздушным, морским, автомобильным и железнодорожным транспортом; складские решения от упаковки до ремонта и хранения; доставка почты по всему миру; а также другие индивидуальные логистические услуги - всем, что делает DHL, мы помогаем объединять людей и улучшать их жизнь.",
            
            'forward': "Глобальная отправка",
            'glob_freight': "Транспорт",
            'supply_chain': "Сеть поставок",

            'partnerships': "Партнерство",
            'portrait': "Сообщество",
            'green': "Экология",
            'innovation': "Инновации",

            'facebook': "Фейсбук",
            'dribbble': "Дрибл",
            'behance': 'Бинанс',
            'gmail': "Майл",
            'twitter': "Твиттер",
        }  
    }

    $(".translate").click(function() {
        let lang = $(this).attr("id");
        

        $(".lang").each(function() {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        })
    })
})