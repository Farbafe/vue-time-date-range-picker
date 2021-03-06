<template>
  <div
    class="vdpr-datepicker__calendar-dialog"
    :class="{
      'vdpr-datepicker__calendar-dialog--inline': this.inline,
    }"
  >
    <div class="vdpr-datepicker__calendar-button-helper is-size-7" v-if="helpers.length">
      <button
        v-for="btn in helpers"
        :key="'btn' + btn.name"
        :class="[
          'vdpr-datepicker__button',
          'vdpr-datepicker__button--block',
          'vdpr-datepicker__button-default',
        ]"
        @click="
          () => {
            onHelperClick(btn.from, btn.to);
          }
        "
      >{{ btn.name }}</button>
    </div>
    <calendar
      :language="language"
      :selectedStartDate="selectedStartDate"
      :selectedEndDate="selectedEndDate"
      :disabledDates="disabledDates"
      :isMondayFirst="isMondayFirst"
      @select-date="selectDate"
      @select-disabled-date="selectDisabledDate"
      @on-prev-calendar="onPrevCalendar"
      @on-next-calendar="onNextCalendar"
    />
    <div class="vdpr-datepicker__calendar-actions">
      <div class="vdpr-datepicker__calendar-input-wrapper">
        <span>{{ dateInput.labelStarts }}</span>
        <calendar-input-date
          :format="dateInput.format"
          :inputClass="dateInput.inputClass"
          :timestamp="unixSelectedStartDate"
          :language="language"
          @on-change="onStartInputDateChange"
        />
      </div>
      <div
        class="vdpr-datepicker__calendar-input-wrapper vdpr-datepicker__calendar-input-wrapper--end"
      >
        <calendar-input-time
          v-show="isVisibleTimeInput"
          :step="timeInput.step"
          :readonly="timeInput.readonly"
          :inputClass="timeInput.inputClass"
          :timestamp="unixSelectedStartDate"
          @on-change="onTimeStartInputChange"
        />
      </div>
      <div class="vdpr-datepicker__calendar-input-wrapper">
        <span>{{ dateInput.labelEnds }}</span>
        <calendar-input-date
          :format="dateInput.format"
          :inputClass="dateInput.inputClass"
          :timestamp="unixSelectedEndDate"
          :language="language"
          @on-change="onEndDateInputDateChange"
        />
      </div>
      <div
        class="vdpr-datepicker__calendar-input-wrapper vdpr-datepicker__calendar-input-wrapper--end"
      >
        <calendar-input-time
          v-show="isVisibleTimeInput"
          :step="timeInput.step"
          :readonly="timeInput.readonly"
          :inputClass="timeInput.inputClass"
          :timestamp="unixSelectedEndDate"
          @on-change="onTimeEndInputChange"
        />
      </div>
      <button
        v-show="isVisibleButtonApply"
        :class="[
          'vdpr-datepicker__button',
          'vdpr-datepicker__button--block',
          'vdpr-datepicker__button-submit',
        ]"
        @click="onClickButtonApply"
      >Apply</button>
    </div>
  </div>
</template>

<script>
import PropsValidator from '../Utils/PropsValidator';
import DateUtil from '../Utils/DateUtil';
import Calendar from './Calendar.vue';
import SwitchButton from './SwitchButton.vue';
import CalendarInputDate from './CalendarInputDate.vue';
import CalendarInputTime from './CalendarInputTime.vue';

export default {
  components: {
    Calendar,
    CalendarInputDate,
    CalendarInputTime,
    SwitchButton,
  },
  props: {
    inline: {
      type: Boolean,
      default: false,
    },
    initialDates: {
      type: Array,
      validator: PropsValidator.isValidInitialDate,
      default() {
        return [];
      },
    },
    language: {
      type: String,
      default: 'en',
    },
    disabledDates: {
      type: Object,
      validator: PropsValidator.isValidDisabledDates,
      default() {
        return {};
      },
    },
    showHelperButtons: {
      type: Boolean,
      default: true,
    },
    helperButtons: {
      type: Array,
      validator: PropsValidator.isValidHelperButtons,
      default() {
        return [];
      },
    },
    timeInput: {
      type: Object,
      default() {
        return {
          inputClass: null,
          readonly: false,
          step: 60, // in minutes
        };
      },
    },
    dateInput: {
      type: Object,
      default() {
        return {
          labelStarts: 'Starts',
          labelEnds: 'Ends',
          inputClass: null,
          format: 'DD/MM/YYYY',
          readonly: false,
        };
      },
    },
    switchButtonLabel: {
      type: String,
      default: 'All Days',
    },
    switchButtonInitial: {
      type: Boolean,
      default: false,
    },
    isMondayFirst: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    const dateUtil = new DateUtil(this.language);
    const [from, to] = this.initialDates;
    let isAllDay = this.switchButtonInitial;

    if (from && to) {
      if (dateUtil.isAllDay(from, to)) {
        isAllDay = true;
      } else {
        isAllDay = false;
      }
    }

    return {
      selectedStartDate: from ?? null,
      selectedEndDate: to ?? null,
      isAllDay,
    };
  },
  computed: {
    dateUtil() {
      return new DateUtil(this.language);
    },
    helpers() {
      if (!this.showHelperButtons) return [];

      if (this.helperButtons.length) return this.helperButtons;

      return this.getDefaultHelpers();
    },
    unixSelectedStartDate() {
      if (!this.selectedStartDate) {
        return 0;
      }
      return this.dateUtil.toUnix(this.selectedStartDate);
    },
    unixSelectedEndDate() {
      if (!this.selectedEndDate) {
        return 0;
      }
      return this.dateUtil.toUnix(this.selectedEndDate);
    },
    isVisibleTimeInput() {
      return !this.isAllDay;
    },
    isVisibleButtonApply() {
      return !this.inline;
    },
  },
  methods: {
    onCheckChange(check) {
      this.isAllDay = check;
      if (!this.selectedStartDate || !this.selectedEndDate) return;

      this.selectedStartDate = this.dateUtil.startOf(
        this.selectedStartDate,
        'd',
      );
      if (check) {
        this.selectedEndDate = this.dateUtil.endOf(this.selectedEndDate, 'd');
      } else {
        this.selectedEndDate = this.dateUtil.startOf(this.selectedEndDate, 'd');
      }
    },
    onStartInputDateChange(value) {
      this.applyOrSwapApply(value, this.selectedEndDate);
      this.emitOnApplyIfInline();
    },
    onEndDateInputDateChange(value) {
      this.applyOrSwapApply(this.selectedStartDate, value);
      this.emitOnApplyIfInline();
    },
    onTimeStartInputChange(value) {
      this.applyOrSwapApply(value, this.selectedEndDate);
      this.emitOnApplyIfInline();
    },
    onTimeEndInputChange(value) {
      this.applyOrSwapApply(this.selectedStartDate, value);
      this.emitOnApplyIfInline();
    },
    onHelperClick(fromDate, toDate) {
      if (this.dateUtil.isAllDay(fromDate, toDate)) {
        this.isAllDay = true;
      } else {
        this.isAllDay = false;
      }

      this.applyOrSwapApply(fromDate, toDate);
      this.$emit('select-date', this.selectedStartDate, this.selectedEndDate);
      this.emitOnApplyIfInline();
    },
    onClickButtonApply() {
      this.$emit('on-apply', this.selectedStartDate, this.selectedEndDate);
    },
    selectDate(date) {
      let startDate = this.selectedStartDate;
      let endDate = this.selectedEndDate;
      if (
        this.dateUtil.isValidDate(startDate)
        && this.dateUtil.isValidDate(endDate)
        && this.dateUtil.isSameDate(startDate, endDate)
      ) {
        endDate = date;
      } else {
        startDate = date;
        endDate = date;
      }

      this.applyOrSwapApply(startDate, endDate);

      if (this.isAllDay) {
        this.selectedStartDate = this.dateUtil.startOf(
          this.selectedStartDate,
          'd',
        );
        this.selectedEndDate = this.dateUtil.endOf(this.selectedEndDate, 'd');
      }

      this.$emit('select-date', this.selectedStartDate, this.selectedEndDate);
      this.emitOnApplyIfInline();
    },
    selectDisabledDate(date) {
      this.$emit('select-disabled-date', date);
    },
    applyOrSwapApply(startDate, endDate) {
      if (this.dateUtil.isAfter(startDate, endDate)) {
        [this.selectedStartDate, this.selectedEndDate] = [endDate, startDate];
      } else {
        this.selectedStartDate = startDate;
        this.selectedEndDate = endDate;
      }
    },
    emitOnApplyIfInline() {
      if (this.inline) {
        this.$emit('on-apply', this.selectedStartDate, this.selectedEndDate);
      }
    },
    getDefaultHelpers() {
      const now = new Date();
      const todayFrom = this.dateUtil.startOf(now, 'd');
      const todayTo = this.dateUtil.endOf(now, 'd');
      const yesterdayFrom = this.dateUtil.subtract(todayFrom, 1, 'd');
      const yesterdayTo = this.dateUtil.subtract(todayTo, 1, 'd');
      const thisWeekFrom = this.dateUtil.startOf(now, 'week');
      const thisWeekTo = this.dateUtil.endOf(now, 'week');
      const lastWeekFrom = this.dateUtil.subtract(thisWeekFrom, 7, 'd');
      const lastWeekTo = this.dateUtil.subtract(thisWeekTo, 7, 'd');
      const thisMonthFrom = this.dateUtil.startOf(now, 'month');
      const thisMonthTo = this.dateUtil.endOf(now, 'month');
      const lastMonthFrom = this.dateUtil.subtract(thisMonthFrom, 1, 'M');
      const lastMonthTo = this.dateUtil.subtract(thisMonthTo, 1, 'M');
      const thisYearFrom = this.dateUtil.startOf(now, 'year');
      const thisYearTo = this.dateUtil.endOf(now, 'year');
      const lastYearFrom = this.dateUtil.subtract(thisYearFrom, 1, 'y');
      const lastYearTo = this.dateUtil.subtract(thisYearTo, 1, 'y');

      return [
        {
          name: 'Today',
          from: todayFrom,
          to: todayTo,
        },
        {
          name: 'Yesterday',
          from: yesterdayFrom,
          to: yesterdayTo,
        },
        {
          name: 'This Week',
          from: thisWeekFrom,
          to: thisWeekTo,
        },
        {
          name: 'Last Week',
          from: lastWeekFrom,
          to: lastWeekTo,
        },
        {
          name: 'This Month',
          from: thisMonthFrom,
          to: thisMonthTo,
        },
        {
          name: 'Last Month',
          from: lastMonthFrom,
          to: lastMonthTo,
        },
        {
          name: 'This Year',
          from: thisYearFrom,
          to: thisYearTo,
        },
        {
          name: 'Last Year',
          from: lastYearFrom,
          to: lastYearTo,
        },
      ];
    },
    onPrevCalendar() {
      this.$emit('on-prev-calendar');
    },
    onNextCalendar() {
      this.$emit('on-next-calendar');
    },
  },
};
</script>

<style lang="scss">
@import "../Styles/CalendarDialog.scss";
</style>
