$.jmpress("template", "slides", {
	children: function( idx, current_child, children ) {
		return {
			y: 200 + idx * 200
			,x: -200 + idx * 200
			,z: -200 + idx * 200
			,rotate: -200+ idx * 200
			,rotateX: -200 + idx *-200
			,rotateY: -200 + idx * 200
			,template: "slides"
			,scale: .3
		}
	}
});