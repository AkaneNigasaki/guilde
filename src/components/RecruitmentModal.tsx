import React, { useState } from "react";
import { X, Shield, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { CLAN_INFO } from "../data/clanData";
import { RecruitmentFormState } from "../types";
import { ActivityDropdown } from "./dropdown/activity-dropdown";

interface RecruitmentModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const RecruitmentModal: React.FC<RecruitmentModalProps> = ({
    isOpen,
    onClose,
}) => {
    const [formData, setFormData] = useState<RecruitmentFormState>({
        nickname: "",
        discordTag: "",
        email: "",
        role: "Rusher Principal (M1887 One-Tap)",
        currentRank: "Grand Maître / Héroïque (Free Fire)",
        hoursPlayed: "2500+ h",
        motivation: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    const handleReset = () => {
        setIsSubmitted(false);
        onClose();
    };

    return (
        <div
            id="recruitment-modal-backdrop"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
        >
            <div
                id="recruitment-modal-container"
                className="w-full max-w-lg bg-[#0C0C10] border border-[#E50027]/40 p-6 sm:p-8 relative shadow-2xl"
            >
                {/* Corner marks */}
                <div className="absolute -top-1 -left-1 w-2.5 h-2.5 bg-[#E50027]" />
                <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#E50027]" />
                <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 bg-[#E50027]" />
                <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#E50027]" />

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-white/60 hover:text-white bg-[#14141A] border border-white/10 hover:border-[#E50027] transition-colors cursor-pointer"
                    aria-label="Fermer"
                >
                    <X className="w-4 h-4" />
                </button>

                {isSubmitted ? (
                    <div className="text-center py-8 space-y-4">
                        <div className="w-14 h-14 bg-[#14141C] border border-green-500 text-green-500 flex items-center justify-center mx-auto">
                            <CheckCircle2 className="w-8 h-8" />
                        </div>
                        <h3 className="font-sen text-3xl font-black text-white uppercase tracking-tight">
                            CANDIDATURE ENREGISTRÉE
                        </h3>
                        <p className="text-xs font-mono text-white/70 leading-relaxed max-w-md mx-auto">
                            Votre dossier a été transmis aux capitaines de la{" "}
                            <strong className="text-white">
                                BRIGADE FANTÔME
                            </strong>
                            . Un test tryout (1v1 One-Tap ou Match 4v4) sera
                            planifié avec vous sur Discord sous 48h.
                        </p>
                        <div className="pt-4">
                            <button
                                onClick={handleReset}
                                className="px-8 py-3 bg-[#E50027] hover:bg-[#FF0033] text-white font-sen text-sm font-black uppercase tracking-wider btn-sen cursor-pointer"
                            >
                                FERMER LA FENÊTRE
                            </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        {/* Modal Header */}
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-9 h-9 bg-[#E50027] flex items-center justify-center font-sen font-black text-lg text-white skew-x-[-10deg]">
                                <span className="skew-x-[10deg]">BF</span>
                            </div>
                            <div>
                                <h3 className="font-sen text-2xl font-black text-white uppercase tracking-tight">
                                    RECRUTEMENT // BRIGADE FANTÔME
                                </h3>
                                <span className="text-[11px] font-mono text-[#E50027] font-bold">
                                    DOSSIER GUILDE FREE FIRE 2026
                                </span>
                            </div>
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-4 mt-6"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-mono text-white/60 mb-1 uppercase tracking-wider">
                                        Pseudo Free Fire
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder=""
                                        value={formData.nickname}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                nickname: e.target.value,
                                            })
                                        }
                                        className="w-full px-3 py-2.5 bg-[#050508] border border-white/15 focus:border-[#E50027] text-white text-xs font-mono outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-mono text-white/60 mb-1 uppercase tracking-wider">
                                        uid free fire
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder=""
                                        value={formData.discordTag}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                discordTag: e.target.value,
                                            })
                                        }
                                        className="w-full px-3 py-2.5 bg-[#050508] border border-white/15 focus:border-[#E50027] text-white text-xs font-mono outline-none"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-mono text-white/60 mb-1 uppercase tracking-wider">
                                        Rôle Principal
                                    </label>
                                    <select
                                        value={formData.role}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                role: e.target.value,
                                            })
                                        }
                                        className="w-full px-3 py-2.5 bg-[#050508] border border-white/15 focus:border-[#E50027] text-white text-xs font-mono outline-none"
                                    >
                                        <option>
                                            Rusher Principal (M1887 One-Tap)
                                        </option>
                                        <option>
                                            Rusher Secondaire (MP40 / UMP)
                                        </option>
                                        <option>
                                            Sniper d'Élite (Double AWM)
                                        </option>
                                        <option>
                                            Capitaine & IGL (Shotcaller)
                                        </option>
                                        <option>
                                            Grenadier & Support (Dimitri /
                                            Homer)
                                        </option>
                                        <option>
                                            Roster Compétitif Battle Royale BR
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-xs font-mono text-white/60 mb-1 uppercase tracking-wider">
                                        Rang Free Fire Actuel
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Ex: Grand Maître 30★ / Héroïque"
                                        value={formData.currentRank}
                                        onChange={(e) =>
                                            setFormData({
                                                ...formData,
                                                currentRank: e.target.value,
                                            })
                                        }
                                        className="w-full px-3 py-2.5 bg-[#050508] border border-white/15 focus:border-[#E50027] text-white text-xs font-mono outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-white/60 mb-1 uppercase tracking-wider">
                                    Taux Headshot (HS%), Armes favorites &
                                    Motivations
                                </label>
                                <textarea
                                    rows={3}
                                    required
                                    placeholder="Indiquez votre ratio K/D, taux de headshot, disponibilité pour les scrims 4v4..."
                                    value={formData.motivation}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            motivation: e.target.value,
                                        })
                                    }
                                    className="w-full px-3 py-2.5 bg-[#050508] border border-white/15 focus:border-[#E50027] text-white text-xs font-sans outline-none resize-none"
                                />
                            </div>

                            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                                <span className="text-[10px] font-mono text-white/40">
                                    TRYOUT TEST EN 1V1 / 4V4
                                </span>
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-[#E50027] hover:bg-[#FF0033] text-white font-sen text-xs font-black uppercase tracking-wider btn-sen flex items-center gap-2 cursor-pointer transition-colors"
                                >
                                    <Send className="w-3.5 h-3.5" />
                                    <span>ENVOYER LA CANDIDATURE</span>
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};
