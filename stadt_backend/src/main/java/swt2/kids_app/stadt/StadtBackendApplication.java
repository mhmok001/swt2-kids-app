package swt2.kids_app.stadt;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class StadtBackendApplication {
	private static final Logger logger = LoggerFactory.getLogger(StadtBackendApplication.class);

	public static void main(String[] args) {
		logger.info("Kidsapp - Backend");
		SpringApplication.run(StadtBackendApplication.class, args);
	}
}
