package dimigo.HelloSpring;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class UserInfoController {
    @GetMapping("userInfo")
    public String userInfo(@RequestParam("id") String id, @RequestParam("name") String name, Model model) {
        model.addAttribute("id", id);
        model.addAttribute("name", name);
        return "userInfo"; //뷰 이름
    }
}
