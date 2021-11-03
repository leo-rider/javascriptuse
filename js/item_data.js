const item_data = [
	{
		'id':1,
		'name':'ジャケット',
		'category':'men',
		'price':1800,
		'text':'テーラーブラウン（tailor）は仕立屋という意味があり、キレイに仕立てられたメンズの上着をテーラードジャケット',
		'brand':'AAA',
		'new':false,
	},
	{
		'id':2,
		'name':'ジャケット',
		'category':'men',
		'price':1800,
		'text':'テーラーホワイト（tailor）は仕立屋という意味があり、キレイに仕立てられたメンズの上着をテーラードジャケット',
		'brand':'AAA',
		'new':false,
	},
	{
		'id':3,
		'name':'ポロシャツ',
		'category':'men',
		'price':800,
		'text':'クリーンな印象ですが、あくまでテニスウェアを由来とするカジュアルなアイテム。通気性抜群',
		'brand':'BBB',
		'new':false,
	},
	{
		'id':4,
		'name':'シャツ',
		'category':'men',
		'price':1200,
		'text':'ワインレッドに仕立てられたお洒落なオックスフォードボタンダウンシャツ',
		'brand':'CCC',
		'new':false,
  },
	{
		'id':5,
		'name':'シャツ',
		'category':'men',
		'price':600,
		'text':'清楚感のある夏仕様の胸ポケット付きホワイトシャツ。',
		'brand':'CCC',
		'new':false,
  },
	{
		'id':6,
		'name':'シャツ',
		'category':'men',
		'price':2980,
		'text':'軽やかなライトグリーンのロングTシャツ。春秋のトップコーデです。',
		'brand':'CCC',
		'new':false,
  },
	{
		'id':7,
		'name':'ジャケット',
		'category':'men',
		'price':3000,
		'text':'ブラウンのダブルライダースジャケット。バイク乗りの間で超人気のアイテムです。',
		'brand':'DDD',
		'new':false,
  },
	{
		'id':8,
		'name':'シャツ',
		'category':'men',
		'price':600,
		'text':'明るく夏感のあるチェックシャツ',
		'brand':'EEE',
		'new':false,
  },
	{
		'id':9,
		'name':'シャツ',
		'category':'men',
		'price':900,
		'text':'デニム生地のお洒落なシャツ。素材も軽く動きやすいアイテムです',
		'brand':'FFF',
		'new':false,
  },
	{
		'id':10,
		'name':'ベスト',
		'category':'men',
		'price':500,
		'text':'きっちりでもゆったりでも似合うベストジャケット。',
		'brand':'CCC',
		'new':false,
  },
	{
		'id':11,
		'name':'シャツ',
		'category':'men',
		'price':4800,
		'text':'春夏秋冬で活躍するホワイトチェックシャツ。シャツ１枚でも着こなせます',
		'brand':'CCC',
		'new':false,
  },
	{
		'id':12,
		'name':'Tシャツ',
		'category':'men',
		'price':4800,
		'text':'海にぴったり軽量のTシャツ。レイヨン生地で伸縮性高いアイテムです',
		'brand':'EEE',
		'new':true,
  },
	{
		'id':13,
		'name':'セーターパーカー',
		'category':'men',
		'price':2000,
		'text':'高級ウール素材の冬用メンズセーター',
		'brand':'CCC',
		'new':false,
  },
	{
		'id':14,
		'name':'Tシャツ',
		'category':'men',
		'price':3200,
		'text':'お洒落なロゴのTシャツ。タックインでも抜群にかっこいいアイテムです',
		'brand':'AAA',
		'new':false,
  },
	{
		'id':15,
		'name':'Tシャツ',
		'category':'men',
		'price':1980,
		'text':'コスパ良好！バンドTシャツ',
		'brand':'DDD',
		'new':false,
  },
	{
		'id':16,
		'name':'シャツ',
		'category':'men',
		'price':7200,
		'text':'渋いボタンダウンシャツ。清楚に着こなせる一品です。',
		'brand':'EEE',
		'new':false,
  },
	{
		'id':17,
		'name':'アロハシャツ',
		'category':'men',
		'price':1800,
		'text':'夏感溢れるレイヨン生地のアロハシャツ。最高のアイテムです',
		'brand':'CCC',
		'new':true,
  },
	{
		'id':18,
		'name':'ジャケット',
		'category':'men',
		'price':19800,
		'text':'LeVISのお洒落なジャケット',
		'brand':'AAA',
		'new':false,
	},
	{
		'id':19,
		'name':'ジャケット',
		'category':'men',
		'price':19800,
		'text':'LeVISのお洒落なジャケット',
		'brand':'AAA',
		'new':false,
	},
	{
		'id':20,
		'name':'ジャケット',
		'category':'men',
		'price':19800,
		'text':'LeVISのお洒落なジャケット',
		'brand':'AAA',
		'new':false,
	},
	{
		'id':21,
		'name':'シャツ',
		'category':'woman',
		'price':4200,
		'text':'清楚で綺麗なホワイトシャツ。レイヨン生地の軽い素材です',
		'brand':'FFF',
		'new':false,
	},
	{
		'id':22,
		'name':'ロングTシャツ',
		'category':'woman',
		'price':2680,
		'text':'一枚でお洒落に着こなせるブラックロングTシャツ',
		'brand':'FFF',
		'new':false,
	},
	{
		'id':23,
		'name':'ジャケット',
		'category':'woman',
		'price':25200,
		'text':'少し派手なピンクジャケット。タイトに着こなせます',
		'brand':'CCC',
		'new':false,
	},
	{
		'id':24,
		'name':'ハーフシャツ',
		'category':'woman',
		'price':5900,
		'text':'夏感溢れる綺麗な花柄のハーフシャツです',
		'brand':'BBB',
		'new':false,
	},
	{
		'id':25,
		'name':'Tシャツ',
		'category':'woman',
		'price':1200,
		'text':'タイトなブラックのTシャツ。フロントタックインでかっこいいトレンドアイテムです',
		'brand':'CCC',
		'new':false,
	},
	{
		'id':26,
		'name':'トレーナー',
		'category':'woman',
		'price':100,
		'text':'チャックつ付きセータートレーナーです。伸縮性もあり暖かいアイテムです',
		'brand':'GGG',
		'new':false,
	},
	{
		'id':27,
		'name':'ドット柄シャツ',
		'category':'woman',
		'price':2600,
		'text':'ドット柄の丈の短いゆったり着れるシャツです',
		'brand':'AAA',
		'new':false,
	},
	{
		'id':28,
		'name':'シャツ',
		'category':'woman',
		'price':7600,
		'text':'タイトなホワイトのワイシャツ。スタイリッシュなアイテムです',
		'brand':'BBB',
		'new':false,
	},
	{
		'id':29,
		'name':'シャツ',
		'category':'woman',
		'price':2300,
		'text':'8分袖のかっこいいタイトなレッドシャツです',
		'brand':'CCC',
		'new':true,
	},
	{
		'id':30,
		'name':'トレーナー',
		'category':'woman',
		'price':11200,
		'text':'ゆったり着れるモスブルーのトレーナーです',
		'brand':'EEE',
		'new':false,
	},
	{
		'id':31,
		'name':'シャツ',
		'category':'woman',
		'price':5400,
		'text':'少しセクシィなワインレッドのシャツ',
		'brand':'GGG',
		'new':false,
	},
	{
		'id':32,
		'name':'デニムコート',
		'category':'woman',
		'price':3200,
		'text':'冬季でお洒落に着こなせるデニムコート。絞りつきでスマートなアイテムです',
		'brand':'FFF',
		'new':false,
	},
	{
		'id':33,
		'name':'レザージャケット',
		'category':'woman',
		'price':4800,
		'text':'バイク乗りの間で人気なロッキンレジャージャケット',
		'brand':'FFF',
		'new':false,
	},
	{
		'id':34,
		'name':'ワンピース',
		'category':'woman',
		'price':1000,
		'text':'可愛い花柄の赤いワンピース！胸元もひらいていて、夏季などでも爽快感のあるアイテムです',
		'brand':'CCC',
		'new':false,
	},
	{
		'id':35,
		'name':'パーカー',
		'category':'woman',
		'price':5500,
		'text':'タイトに着こなせるオレンジカラーのお洒落パーカー',
		'brand':'AAA',
		'new':false,
	},
	{
		'id':36,
		'name':'ドレスワンピース',
		'category':'woman',
		'price':5400,
		'text':'インナーでも着れるお洒落な花柄ドレスワンピース！各色24種類ご用意しております',
		'brand':'CCC',
		'new':false,
	},
	{
		'id':37,
		'name':'ウィンドブレーカー',
		'category':'woman',
		'price':3200,
		'text':'ランニングにもバッチしなウィンドブレーカーです。フリーサイズアイテムです',
		'brand':'DDD',
		'new':false,
	},
	{
		'id':38,
		'name':'ガウチョパンツ',
		'category':'woman',
		'price':6700,
		'text':'ゆったりめな線太ボーダーのガウチョパンツ！上は何着ても抜群に似合うアイテムです',
		'brand':'EEE',
		'new':false,
	},
	{
		'id':39,
		'name':'タイトスカート',
		'category':'woman',
		'price':7600,
		'text':'清楚なタイトスカート。カラーは赤、青、白、黒の4種類あります',
		'brand':'CCC',
		'new':true,
	},
	{
		'id':40,
		'name':'シャツ',
		'category':'woman',
		'price':2900,
		'text':'夏カラーの淡いカラーレッドのシャツでトレンドアイテムです',
		'brand':'HHH',
		'new':false,
	},

	{
		'id':41,
		'name':'Tシャツ',
		'category':'kids',
		'price':1400,
		'text':'綿100%のお洒落ロゴのアイテムです',
		'brand':'HHH',
		'new':false,
	},
	{
		'id':42,
		'name':'ポロシャツ',
		'category':'kids',
		'price':4500,
		'text':'ワンポイントのシンプルなカラーレッドのポロシャツ。ラフに着れる定番なアイテムです',
		'brand':'HHH',
		'new':false,
	},
	{
		'id':43,
		'name':'ベスト',
		'category':'kids',
		'price':800,
		'text':'ドット柄のお洒落なベストです。清楚に合わせやすいアイテムです。',
		'brand':'GGG',
		'new':false,
	},
	{
		'id':44,
		'name':'Tシャツ',
		'category':'kids',
		'price':3200,
		'text':'定番な軽やかに着用できるTシャツ！サイズ感は3歳~ご用意がございます',
		'brand':'EEE',
		'new':false,
	},
	{
		'id':45,
		'name':'シャツ',
		'category':'kids',
		'price':3400,
		'text':'伸縮性のあるウール素材のシャツ。24種のカラーから選べます',
		'brand':'CCC',
		'new':false,
	},
	{
		'id':46,
		'name':'パーカー',
		'category':'kids',
		'price':1700,
		'text':'ストライプ生地のお洒落なパーカーです。首回りに絞りがついている便利なアイテムです',
		'brand':'FFF',
		'new':true,
	},
	{
		'id':47,
		'name':'ニット帽',
		'category':'kids',
		'price':300,
		'text':'可愛いボンボンのアクセントがついたニット帽です！！お子さんが気にいること間違いなしの一品です',
		'brand':'AAA',
		'new':false,
	},
	{
		'id':48,
		'name':'シャツ',
		'category':'kids',
		'price':5600,
		'text':'清楚感のあるホワイトをベースにお洒落なコモン柄のゆったりしたシャツ',
		'brand':'BBB',
		'new':false,
	},
	{
		'id':49,
		'name':'セットアップ',
		'category':'kids',
		'price':11200,
		'text':'サイズ新調可能！！夏感際立つアロハセットアップ。',
		'brand':'BBB',
		'new':false,
	},
	{
		'id':50,
		'name':'ガウチョパンツ',
		'category':'kids',
		'price':4900,
		'text':'夏カラーのボーダーガウチョパンツ！！トレンドアイテムです',
		'brand':'GGG',
		'new':false,
	},
	{
		'id':51,
		'name':'セットアップ',
		'category':'kids',
		'price':1200,
		'text':'お姫様のようなふわふわなセットアップアイテムです。スカートはヒラヒラつきで可愛さも倍増です',
		'brand':'HHH',
		'new':false,
	},
	{
		'id':52,
		'name':'セットアップ',
		'category':'kids',
		'price':1600,
		'text':'ジャングル柄の可愛いセットアップアイテム！！夏などにぴったりの素材で使用感も重くない一品です',
		'brand':'HHH',
		'new':false,
	},
	{
		'id':53,
		'name':'ワンピース',
		'category':'kids',
		'price':400,
		'text':'ギンガムチェックのウール生地ワンピースで冬場でもお洒落に着こなせるアイテム！！',
		'brand':'CCC',
		'new':false,
	},
	{
		'id':54,
		'name':'コート',
		'category':'kids',
		'price':2400,
		'text':'防水素材でレインコートとしてのご利用も可能です！カラーも各12種類からお選びいただけます',
		'brand':'AAA',
		'new':false,
	},
	{
		'id':55,
		'name':'ワンピース',
		'category':'kids',
		'price':6400,
		'text':'派手に着飾れるレッドドレスワンピース。丈の新調ご相談可能です',
		'brand':'CCC',
		'new':false,
	},
	{
		'id':56,
		'name':'オーバーオール',
		'category':'kids',
		'price':2500,
		'text':'Tシャツ、パーカー等とお洒落に合わせることができるオーバーオール。1年通して着こなせるトレンドアイテムです',
		'brand':'CCC',
		'new':false,
	},
	{
		'id':57,
		'name':'ジャケット',
		'category':'kids',
		'price':1600,
		'text':'ゆったり着れる、冬場にぴったりな防寒ジャケット！！',
		'brand':'BBB',
		'new':false,
	},
	{
		'id':58,
		'name':'シャツ',
		'category':'kids',
		'price':2200,
		'text':'タイトで可愛いブラックシャツ。ジャケットあわせて着こなしましょう',
		'brand':'GGG',
		'new':false,
	},
	{
		'id':59,
		'name':'ワンピース',
		'category':'kids',
		'price':4800,
		'text':'2020年のトレンドカラーワンピース！お子さんも喜んでくれるに違いない！！',
		'brand':'EEE',
		'new':false,
	},
	{
		'id':60,
		'name':'ジャケット',
		'category':'kids',
		'price':900,
		'text':'バイク乗りに人気なオープンデニムジャケット。渋くてかっこいいトレンドアイテムです！',
		'brand':'AAA',
		'new':false,
	}
]