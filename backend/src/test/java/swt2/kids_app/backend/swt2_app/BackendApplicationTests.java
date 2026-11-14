package swt2.kids_app.backend.swt2_app;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import static org.awaitility.Awaitility.await;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.time.Duration;

@SpringBootTest
class BackendApplicationTests {

	@BeforeAll
	static void testWaitForDb() {
		await().atMost(Duration.ofSeconds(30)).pollInterval(Duration.ofSeconds(1))
				.until(() -> {
					try (Connection conn = DriverManager.getConnection(
							"jdbc:mariadb://localhost:3308/mydb", "myuser", "mypassword")) {
						return conn.isValid(1);
					} catch (SQLException e) {
						return false;
					}
				});
	}

	@Test
	void contextLoads() {
	}

}
