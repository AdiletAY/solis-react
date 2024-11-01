// @ts-nocheck
export function teamArrayFilter(data:any) {
	const result:any = [];

	data.forEach(item => {
		const cityEn = item.branche.city_en;
		const cityKk = item.branche.city_kk;
		const cityRu = item.branche.city_ru;

		let cityGroup = result.find(
				city => city.cityName_en === cityEn && city.cityName_kk === cityKk && city.cityName_ru === cityRu
		);

		if (!cityGroup) {
			cityGroup = {
				id: item.branche.id,
				cityName_en: cityEn,
				cityName_kk: cityKk,
				cityName_ru: cityRu,
				team: []
			};
			result.push(cityGroup);
		}

		cityGroup.team.push({
			id: item.id,
			fullName_en: item.fullName_en,
			fullName_ru: item.fullName_ru,
			fullName_kk: item.fullName_kk,
			position_en: item.position_en,
			position_ru: item.position_ru,
			position_kk: item.position_kk,
			avatar: item.avatar.id
		});
	});

	return result;
}
