var Lizard = {};
Lizard.id = 'lizard';
Lizard.series = 'leaf';
Lizard.seriesClass = 'lizardSeries';
Lizard.seriesImg = './device/lizard/img/lizard.png';
Lizard.serieSmallImg = './device/lizard/img/lizard.png';
Lizard.img = CORE_DIR + '/device/' + Lizard.id + '/img/' + Lizard.id  + '.png';
Lizard.kits = {}

Lizard.active = 'active';
Lizard.functions = [
	"remote",
	"bluetooth",
]

Lizard.libs = [
	// 'lizard.py',
	// 'pw.py',
	// 'robot.py',
];

Lizard.init = function () {
	Lizard.name = MSG.catLizard;
	Lizard.description = MSG.lizard_description;
}
