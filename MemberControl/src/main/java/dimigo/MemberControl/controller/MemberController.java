package dimigo.MemberControl.controller;

import dimigo.MemberControl.domain.Member;
import dimigo.MemberControl.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.ArrayList;

@Controller
public class MemberController {

    private MemberService ms;

    @Autowired
    public MemberController(MemberService ms) {
        this.ms = ms;
    }

    @GetMapping("/members/new")
    public String registerMember() {
        return "registerMember";
    }

    @PostMapping("/members/new")
    public String register(Memberform mf) {
        System.out.print(mf.getName());
        Member m = new Member();
        m.setName(mf.getName());
        ms.register(m);
        return "redirect:/";

    }

    @GetMapping("/members")
    public String memberList(Model model) {
        ArrayList<Member> m = ms.findMembers();
        model.addAttribute("list", m);
        return "memberList";
    }

}
