package swt2.kids_app.backend.swt2_app.services.EventService.Exceptions;

import swt2.kids_app.backend.swt2_app.business.typ.Category;

public class EventDispatcherException extends RuntimeException {
  public EventDispatcherException(Category category) {
    super("No handler found for event category: " + category);
  }
}