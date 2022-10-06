package dimigo.MemberControl.service;

import dimigo.MemberControl.domain.Member;
import dimigo.MemberControl.repository.MemberRepository;

import java.util.ArrayList;

public class MemberService {
    private MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }


    public int register(Member m) {
        memberRepository.save(m);
        return m.getId();
    }

    public ArrayList<Member> findMembers() {
        return memberRepository.findAll();
    }

    public Member findOneMember(int id) {
        return memberRepository.findById(id);
    }

}
