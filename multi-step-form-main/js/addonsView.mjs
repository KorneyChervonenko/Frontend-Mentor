import { STATE } from './state.mjs';
import { CONFIG } from './config.mjs';
import { hideElements, showElements } from './helpers.mjs';
import { SectionView } from './sectionView.mjs';

export class AddonsView extends SectionView {
	constructor() {
		super('.add-ons');
		this.form = this.parent.querySelector('form.add-ons-checklist');
		// this.form.style.backgroundColor = 'aqua';
		this.checkboxes = this.form.querySelectorAll('input[type="checkbox"]');

		this.onlineServiceMonthlyTariff = this.form.querySelector('input[value="online-service"] ~ .tariff.monthly');
		this.onlineServiceYearlyTariff = this.form.querySelector('input[value="online-service"] ~ .tariff.yearly');

		this.largerStorageMonthlyTariff = this.form.querySelector('input[value="larger-storage"] ~ .tariff.monthly');
		this.largerStorageYearlyTariff = this.form.querySelector('input[value="larger-storage"] ~ .tariff.yearly');

		this.customizableProfileMonthlyTariff = this.form.querySelector(
			'input[value="customizable-profile"] ~ .tariff.monthly'
		);

		this.customizableProfileYearlyTariff = this.form.querySelector(
			'input[value="customizable-profile"] ~ .tariff.yearly'
		);
		this.setValues();
		this.update();
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
		switch (STATE.userData.period) {
			case 'monthly':
				hideElements([
					this.onlineServiceYearlyTariff,
					this.largerStorageYearlyTariff,
					this.customizableProfileYearlyTariff,
				]);
				showElements([
					this.onlineServiceMonthlyTariff,
					this.largerStorageMonthlyTariff,
					this.customizableProfileMonthlyTariff,
				]);
				break;

			case 'yearly':
				showElements([
					this.onlineServiceYearlyTariff,
					this.largerStorageYearlyTariff,
					this.customizableProfileYearlyTariff,
				]);
				hideElements([
					this.onlineServiceMonthlyTariff,
					this.largerStorageMonthlyTariff,
					this.customizableProfileMonthlyTariff,
				]);
				break;
		}
	}
}
