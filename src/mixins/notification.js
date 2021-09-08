export default {
  created() {
    this.hideNotification();
  },
  methods: {
    showNotification(
      message,
      typePrimary = "is-danger",
      typeSecondary = "is-light"
    ) {
      this.notification.isActive = true;
      this.notification.message = message;
      this.notification.typePrimary = typePrimary;
      this.notification.typeSecondary = typeSecondary;
    },
    hideNotification() {
      this.notification.isActive = false;
      this.notification.message = null;
    },
  },
};
