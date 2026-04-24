import React from 'react';

const ImportantInfo = ({ language }) => {
    const t = {
        allergy: {
            en: 'Please Inform the Servers For Any Allergies Or Vegan Preferences',
            am: 'ለማንኛውም አለርጂ ወይም የቪጋን ምርጫዎች እባክዎ ለአስተናጋጆች ያሳውቁ',
            zh: '如有任何过敏或素食偏好，请告知服务员',
            ar: 'يرجى إبلاغ الخوادم بأي حساسية أو تفضيلات نباتية',
            fr: 'Veuillez informer les serveurs de toute allergie ou préférence végétalienne'
        }[language] || 'Please Inform the Servers For Any Allergies Or Vegan Preferences',
        vat: {
            en: 'All prices are inclusive of 10% service charge & 15% VAT',
            am: 'ሁሉም ዋጋዎች 10% የአገልግሎት ክፍያ እና 15% ቫት ያካተቱ ናቸው',
            zh: '所有价格均包含10%服务费及15%增值税',
            ar: 'جميع الأسعار تشمل 10% رسوم خدمة و15% ضريبة القيمة المضافة',
            fr: 'Tous les prix incluent 10% de frais de service et 15% de TVA'
        }[language] || 'All prices are inclusive of 10% service charge & 15% VAT',
        currency: {
            en: 'All prices are in Ethiopian Birr',
            am: 'ሁሉም ዋጋዎች በኢትዮጵያ ብር ናቸው',
            zh: '所有价格均以埃塞俄比亚比尔计价',
            ar: 'جميع الأسعار بالبير الإثيوبي',
            fr: 'Tous les prix sont en Birr éthiopien'
        }[language] || 'All prices are in Ethiopian Birr'
    };

    return (
        <div className="px-6 py-4 bg-amber-50 border-l-4 border-hotel-gold mx-4 rounded-r-lg shadow-sm">
            <div className="space-y-3">
                <div>
                    <div className="mb-4 flex justify-center">
                        <img
                            src={`${import.meta.env.BASE_URL}images/liyana_menu_cover_clean.png`}
                            alt="Liyana Coffee and Pastry Menu"
                            className="w-[95%] max-w-[400px] h-auto object-contain mix-blend-multiply drop-shadow-sm"
                        />
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-medium">
                        {t.allergy}
                    </p>
                </div>

                <div className="pt-2 border-t border-amber-200">
                    <h4 className="text-sm font-bold text-hotel-dark">Liyana Coffee and Pastry</h4>
                    <p className="text-xs text-slate-600">Addis Ababa, Ethiopia</p>
                </div>

                <div className="pt-2 border-t border-amber-200 space-y-1">
                    <p className="text-[11px] text-slate-600 font-bold tracking-wider">
                        {t.vat}
                    </p>
                    <p className="text-[11px] text-slate-600 font-bold tracking-wider">
                        {t.currency}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ImportantInfo;
