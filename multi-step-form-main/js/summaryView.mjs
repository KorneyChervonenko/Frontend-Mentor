import { STATE } from './state.mjs';
import { CONFIG } from './config.mjs';
import { hideElements, showElements } from './helpers.mjs';
import { SectionView } from './sectionView.mjs';

export class SummaryView extends SectionView {
	constructor() {
		super('.summary');
		this.plan = document.getElementById('plan');
		this.planTitle = this.plan.querySelector('.title');
		this.planTitleMonthly = this.planTitle.parentElement.querySelector('.monthly');
		this.planTitleYearly = this.planTitle.parentElement.querySelector('.yearly');

		this.planMonthlyTariff = this.plan.querySelector('.tariff.monthly');
		this.planYearlyTariff = this.plan.querySelector('.tariff.yearly');
		this.periodSwitch = this.plan.querySelector('input[type="checkbox"]'); // bind it with other switch

		this.onlineService = document.getElementById('online-service');
		this.onlineServiceMonthlyTariff = this.onlineService.querySelector('.tariff.monthly');
		this.onlineServiceYearlyTariff = this.onlineService.querySelector('.tariff.yearly');

		this.largerStorage = document.getElementById('larger-storage');
		this.largerStorageMonthlyTariff = this.largerStorage.querySelector('.tariff.monthly');
		this.largerStorageYearlyTariff = this.largerStorage.querySelector('.tariff.yearly');

		this.customizableProfile = document.getElementById('customizable-profile');
		this.customizableProfileMonthlyTariff = this.customizableProfile.querySelector('.tariff.monthly');
		this.customizableProfileYearlyTariff = this.customizableProfile.querySelector('.tariff.yearly');

		this.total = document.getElementById('total');
		this.totalTitleMonthly = this.total.querySelector('.table-header > .monthly');
		this.totalTitleYearly = this.total.querySelector('.table-header > .yearly');
		this.totalMonthlyTariff = this.total.querySelector('.tariff.monthly');
		this.totalYearlyTariff = this.total.querySelector('.tariff.yearly');

		this.setValues();
		this.update();
	}

	addCheckHandler(handler) {
		this.periodSwitch.addEventListener('change', handler);
	}

	setValues() {
		this.onlineServiceMonthlyTariff.textContent = `+$${CONFIG.addons['online-service'].monthly}/mo`;
		this.onlineServiceYearlyTariff.textContent = `+$${CONFIG.addons['online-service'].yearly}/yr`;

		this.largerStorageMonthlyTariff.textContent = `+$${CONFIG.addons['larger-storage'].monthly}/mo`;
		this.largerStorageYearlyTariff.textContent = `+$${CONFIG.addons['larger-storage'].yearly}/yr`;

		this.customizableProfileMonthlyTariff.textContent = `+$${CONFIG.addons['customizable-profile'].monthly}/mo`;
		this.customizableProfileYearlyTariff.textContent = `+$${CONFIG.addons['customizable-profile'].yearly}/yr`;
	}

	update() {
		const selectedPlan = STATE.userData.plan;
		const planMonthlyTariff = CONFIG.plans[selectedPlan].monthly;
		const planYearlyTariff = CONFIG.plans[selectedPlan].yearly;
		this.planTitle.textContent = selectedPlan.toCapitalize();

		// change numbers in accordance with plan
		this.planMonthlyTariff.textContent = `$${planMonthlyTariff}/mo`;
		this.planYearlyTariff.textContent = `$${planYearlyTariff}/yr`;

		let totalMonthlyTariff = planMonthlyTariff;
		let totalYearlyTariff = planYearlyTariff;

		// hide all summary-table rows consist add-ons tariffs
		Object.keys(CONFIG.addons).forEach((addon) => {
			const tableRow = this.parent.querySelector(`.table-row[id="${addon}"]`);
			tableRow.classList.add('hidden');
		});

		STATE.userData.addons.forEach((addon) => {
			const tableRow = this.parent.querySelector(`.table-row[id="${addon}"]`);
			tableRow.classList.remove('hidden');
			totalMonthlyTariff += CONFIG.addons[addon].monthly;
			totalYearlyTariff += CONFIG.addons[addon].yearly;
		});

		this.totalMonthlyTariff.textContent = `$${totalMonthlyTariff}/mo`;
		this.totalYearlyTariff.textContent = `$${totalYearlyTariff}/yr`;

		switch (STATE.userData.period) {
			case 'monthly':
				hideElements([
					this.planTitleYearly,
					this.planYearlyTariff,
					this.onlineServiceYearlyTariff,
					this.largerStorageYearlyTariff,
					this.customizableProfileYearlyTariff,
					this.totalTitleYearly,
					this.totalYearlyTariff,
				]);
				showElements([
					this.planTitleMonthly,
					this.planMonthlyTariff,
					this.onlineServiceMonthlyTariff,
					this.largerStorageMonthlyTariff,
					this.customizableProfileMonthlyTariff,
					this.totalTitleMonthly,
					this.totalMonthlyTariff,
				]);
				break;

			case 'yearly':
				showElements([
					this.planTitleYearly,
					this.planYearlyTariff,
					this.onlineServiceYearlyTariff,
					this.largerStorageYearlyTariff,
					this.customizableProfileYearlyTariff,
					this.totalTitleYearly,
					this.totalYearlyTariff,
				]);
				hideElements([
					this.planTitleMonthly,
					this.planMonthlyTariff,
					this.onlineServiceMonthlyTariff,
					this.largerStorageMonthlyTariff,
					this.customizableProfileMonthlyTariff,
					this.totalTitleMonthly,
					this.totalMonthlyTariff,
				]);
				break;
		}
	}
}
